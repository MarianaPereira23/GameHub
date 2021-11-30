import axios from 'axios';
import hltb from 'howlongtobeat';

const hltbService = new hltb.HowLongToBeatService();

const baseUrlRAWG = 'https://api.rawg.io/api/';
const baseUrlIGDB = 'https://api.igdb.com/v4/';

const getGamesInfo = async name => {
  const data = await axios.get(`${baseUrlRAWG}games?search=${name}&key=${process.env.RAWG_KEY}`);
  const result = data.data.results.map(game => {
    return({
      name: game.name,
      background_image: game.background_image,
    })});
  return result;
};

export const getGames = async (req, res) => {
  const { searchQuery } = req.params;
  const data = await hltbService.search(`${searchQuery}`);
  if (data.length < 1) {
    return res.send('Your search returned no results.')
  };
  const name = data.sort((a, b) => b.similarity - a.similarity)
                      .map(game => game.name)[0];
  const games = await getGamesInfo(name);
  res.status(200).send(games);
};

export const getHomeData = async (req, res) => {  
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month;
    }
  };

  const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    }else{
        return day;
    }
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
  const lastTenYears = `${currentYear-10}-${currentMonth}-${currentDay}`;

  const data = await axios.get(`${baseUrlRAWG}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=5&key=${process.env.RAWG_KEY}`);
  const popularGames = data.data;
  const result = await axios.get(`${baseUrlRAWG}games?dates=${lastTenYears},${currentDate}&page_size=5&metacritic=90,100&key=${process.env.RAWG_KEY}`);
  const topRatedGames = result.data;

  res.status(200).send([popularGames, topRatedGames]);
};


// export const getGameIgdb = async (req, res) => {
//   const accessToken = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`);

//   const data = await axios({
//     url: "https://api.igdb.com/v4/games",
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Client-ID': process.env.IGDB_CLIENT_ID,
//         'Authorization': `Bearer ${accessToken.data.access_token}`,
//     },
//     data: `search "skyrim"; fields name,summary,cover,videos;`
//     });

//   res.send(data.data[0]);
// };

// export const getGameHowLong = async (req, res) => {
//   //const { searchQuery } = req.body;
//   const searchQuery = 'skyrim';
//   const data = await hltbService.search(`${searchQuery}`);
//   const results = data.sort((a, b) => b.similarity - a.similarity)
//                       .map(game => {
//                         return({
//                           name: game.name,
//                           gameplayMain: game.gameplayMain,
//                           gameplayMainExtra: game.gameplayMainExtra,
//                           gameplayCompletionist: game.gameplayCompletionist,
//                         })
//                       });
//   res.send(results);
// };
