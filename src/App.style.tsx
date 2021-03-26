import styled from 'styled-components';
import { AppBase } from './App';

export const App = styled(AppBase)`
    height: 100%;

    .ant-row {
        display: flex;
        flex-direction: row-reverse;
        height: 100%;
    }
`;