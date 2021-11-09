import Link from "next/link";
import React, { ReactElement } from "react";
import { Box, Heading, Link as CharkaLink } from "@chakra-ui/react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import { Category, Project } from "@prisma/client";
import useThemeColor from "common/hooks/useThemeColor";
import Card from "common/components/dataDisplay/Card";

export interface indexProps {}

const fetcher = (url: string) =>
	axios.get(url).then((res: AxiosResponse) => res.data);

export default function index(props: indexProps): ReactElement | null {
	const { data, error } = useSWR("/api/v1/category", fetcher);
	const { boxBackground } = useThemeColor();

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Projects</h1>
			{data.categories.map((category: Category) => {
				return (
					<Box
						key={category.id}
						height="min-content"
						padding="2"
						backgroundColor={boxBackground}
						rounded="md"
						shadow="md"
						my={2}
					>
						<Link
							href="/projects/[id]"
							as={`/projects/${category.id}`}
							passHref
						>
							<CharkaLink>
								<Heading as="h2" size="md" fontWeight="normal">
									{category.name}
								</Heading>
							</CharkaLink>
						</Link>

						<Box my={2}>
							{category.projects.map((project: Project) => {
								return (
									<Card
										key={project.id}
										title={project.name}
										description={project.description}
										// image={project.image}
										link={`/projects/${project.id}`}
									/>
								);
							})}
						</Box>
					</Box>
				);
			})}
		</div>
	);
}
