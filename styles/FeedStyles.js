import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #fff;
    padding: 20px;
`;

export const Card = styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 20px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`;

export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const UserInfoText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const PostTime = styled.Text`
    font-size: 12px;
    color: #666666
`;

export const PostText = styled.Text`
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const PostImg = styled.Image`
    width: 372px;
    height: 470px;
    margin-top: 15px;
`;

export const Divider = styled.View`
    border-bottom-color: #4b5756;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const InteractionText = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;
