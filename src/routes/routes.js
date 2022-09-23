import config from '~/config';
import BoxPage from '~/pages/Box/BoxPage';
import HomePage from '~/pages/Home/HomePage';
import MarketPage from '~/pages/Market/MarketPage';
import PlayPage from '~/pages/Play/PlayPage';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.play, component: PlayPage },
    { path: config.routes.box, component: BoxPage },
    { path: config.routes.market, component: MarketPage },
];

export { publicRoutes };
