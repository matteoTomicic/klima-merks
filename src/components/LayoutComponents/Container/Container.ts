import styled from "styled-components";

const Container = styled.div`
	width: calc(100% - 3.2rem);
	margin-left: auto;
	margin-right: auto;

	${({ theme }) => theme.device.SM} {
		max-width: 54rem;
		width: 100%;
	}

	${({ theme }) => theme.device.MD} {
		max-width: 72rem;
	}

	${({ theme }) => theme.device.LG} {
		max-width: 96rem;
	}

	${({ theme }) => theme.device.XL} {
		max-width: 114rem;
	}

	${({ theme }) => theme.device.XXL} {
		max-width: 132rem;
	}
`;

export default Container;
