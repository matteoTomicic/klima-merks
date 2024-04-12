import Link from "next/link";
import React from "react";

import { Container, Description, Main, Title } from "../components/sharedstyles";

export default function About() {
	return (
		<Container>
			<Main>
				<Title>About Page</Title>
				<Description>
					<Link href="/">&larr; Go Back</Link>
				</Description>
			</Main>
		</Container>
	);
}
