import CountUp from "react-countup";

import { colors } from "../../global.styles";
import { H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import { StatCard, StatCardText, StatsGrid, StyledContainer } from "./styles";

interface IStatsCard {
	cardBackgroundColor: string;
	cardClassName?: string;
	cardCounterNumber: number;
	cardHeading: string;
	cardMaxWidth?: string;
	cardText: string;
	key: number;
}

export interface IOurStoryByNumbers {
	heading: string;
	introText: string;
	statsCards: IStatsCard[];
}

function OurStoryByNumbers({ heading, introText, statsCards }: IOurStoryByNumbers) {
	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<StyledContainer>
				<div>
					<H2>{heading}</H2>
					<Subtitle2>{introText}</Subtitle2>
				</div>
				<StatsGrid>
					{statsCards.map((card) => (
						<StatCard
							$cardBackgroundColor={card.cardBackgroundColor}
							$cardMaxWidth={card.cardMaxWidth}
							className={card.cardClassName}
							key={card.key}
						>
							<CountUp className="count-number" enableScrollSpy end={card.cardCounterNumber} scrollSpyOnce suffix="+" />
							<StatCardText>
								<Subtitle1>{card.cardHeading}</Subtitle1>
								<Subtitle2>{card.cardText}</Subtitle2>
							</StatCardText>
						</StatCard>
					))}
				</StatsGrid>
			</StyledContainer>
		</Section>
	);
}

export default OurStoryByNumbers;
