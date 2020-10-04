import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 30px 100px;
`;

export const Title = styled.Text`
	font-size: 24px;
	color: #f4ede8;
	font-family: 'RobotoSlab-Medium';
	margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
	margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
	font-family: 'RobotoSlab-Regular';
	font-size: 16px;
	color: #f4ede8;
`;

export const CreateAccountText = styled.Text`
	font-family: 'RobotoSlab-Regular';
	font-size: 18px;
	color: #ff9000;
`;
export const CreateAccountButton = styled.TouchableOpacity`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	background: #312e38;
	border-top-width: 1px;
	border-color: #232129;
	padding: 16px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
