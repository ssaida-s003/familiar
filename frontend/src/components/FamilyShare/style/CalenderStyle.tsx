import Calendar from 'react-calendar'
import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

export const CalendarWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .react-calendar {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px;
        padding: 5px;
        background-color: white;
    }

    .react-calendar__month-view {
        abbr {
            color: ${props => props.theme.gray_1};
        }
    }

    /* 네비게이션 가운데 정렬 */

    .react-calendar__navigation {
        justify-content: center;
        height: 5%;
    }

    /* 네비게이션 폰트 설정 */

    .react-calendar__navigation button {
        font-size: 6px;
    }

    /* 네비게이션 버튼 컬러 */

    .react-calendar__navigation button:focus {
        background-color: white;
    }

    /* 네비게이션 비활성화 됐을때 스타일 */

    .react-calendar__navigation button:disabled {
        background-color: white;
        color: ${props => props.theme.darkBlack};
    }

    /* 요일 밑줄 제거 */

    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: 500;
    }

    /* 일요일에만 빨간 폰트 */

    .react-calendar__month-view__weekdays__weekday--weekend abbr[title='일요일'] {
        color: ${props => props.theme.red_1};
    }

    /* 오늘 날짜 폰트 컬러 */

    .react-calendar__tile--now {
        background: none;

    {
        color: ${props => props.theme.primary_2};
    }
    }

    /* 네비게이션 월 스타일 적용 */

    .react-calendar__year-view__months__month {
        border-radius: 5px;
        background-color: ${props => props.theme.gray_5};
        padding: 0;
    }

    /* 네비게이션 현재 월 스타일 적용 */

    .react-calendar__tile--hasActive {
        background-color: ${props => props.theme.primary_2};

        abbr {
            color: white;
        }
    }

    /* 일 날짜 간격 */

    .react-calendar__tile {
        //padding: 5px 0px 18px;
        position: relative;
    }

    /* 네비게이션 월 스타일 적용 */

    .react-calendar__year-view__months__month {
        flex: 0 0 10px !important;
        margin-inline-start: 0.1px !important;
        margin-inline-end: 0.1px !important;
        margin-block-end: 1px;
        padding: 2px 0.5px;
        font-size: 5px;
        font-weight: 600;
        color: ${props => props.theme.gray_1};
    }

    /* 선택한 날짜 스타일 적용 */

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        background-color: ${props => props.theme.yellow_2};
        border-radius: 5px;
    }
`

export const StyledCalendar = styled(Calendar)``

export const StyledToday = styled.div``

export const StyledDot = styled.div``

export const StyledDate = styled.div``
