import BoxDetail from '~/components/BoxDetail/BoxDetail';
import Button from '~/components/Button/Button';
import btnBox from '../../assets/images/btn_boxes.png';
import btnBoxHover from '../../assets/images/btn_boxes_hover.png';
import btnDashboard from '../../assets/images/btn_dashboard.png';
import btnDashboardHover from '../../assets/images/btn_dashboard_hover.png';
import btnHistory from '../../assets/images/btn_history.png';
import btnHistoryHover from '../../assets/images/btn_history_hover.png';
import './home-page.scss';

const btnNav = [
    {
        backGround: btnBox,
        hover: btnBoxHover,
    },
    {
        backGround: btnDashboard,
        hover: btnDashboardHover,
    },
    {
        backGround: btnHistory,
        hover: btnHistoryHover,
    },
];

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="home-page__nav">
                {btnNav.map((item, index) => (
                    <Button
                        key={index}
                        backgroundImage={item.backGround}
                        hover={item.hover}
                        className="home-page__nav__btn"
                    />
                ))}
            </div>
            <div className="home-page__content">
                <BoxDetail />
            </div>
        </div>
    );
}
