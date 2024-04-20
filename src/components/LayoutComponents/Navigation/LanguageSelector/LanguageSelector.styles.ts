import styled from "styled-components";

export const SelectedLanguageImageWrapper = styled.div`
	display: none;
	cursor: pointer;

	${({ theme }) => theme.device.LG} {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing(1)};
	}

	svg {
		color: ${({ theme }) => theme.colors.dark};
	}
`;

export const LanguageName = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const LanguagesDropdown = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spacing(5)};

	${({ theme }) => theme.device.LG} {
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing(2)};
		height: 0;
		position: absolute;
		right: 0;
		top: 5.2rem;
		background-color: ${({ theme }) => theme.colors.neutral};
		overflow: hidden;
		transition: 0.25s all ease-in-out;
		padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(4)}`};
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	&.opened {
		${({ theme }) => theme.device.LG} {
			padding: ${({ theme }) => theme.spacing(4)};
			height: 11.8rem;
		}
	}
`;

export const Flag = styled.div`
	position: relative;
	padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(1)}`};
	display: flex;
	align-items: center;
	border-radius: 2rem;
	transition: 0.25s all ease-in-out;

	${({ theme }) => theme.device.LG} {
		min-width: 13.4rem;
	}

	&:hover {
		${({ theme }) => theme.device.LG} {
			background-color: rgba(0, 145, 126, 0.2);
		}
	}

	a {
		text-decoration: none;
		display: flex;
		align-items: center;
	}

	&.selected-language {
		background-color: rgba(0, 145, 126, 0.2);

		.checkmark {
			margin-left: ${({ theme }) => theme.spacing(2)};
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
