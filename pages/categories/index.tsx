import Link from "next/link";
import React, { ReactElement } from "react";
import {
	Box,
	Heading,
	Link as CharkaLink,
	Button,
	FormControl,
	Input,
	FormLabel,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Icon,
} from "@chakra-ui/react";
import useSWR from "swr";
import axios, { AxiosResponse } from "axios";
import { Category, Project } from "@prisma/client";
import useThemeColor from "common/hooks/useThemeColor";
import Card from "common/components/dataDisplay/Card";
import BreadCrumb from "common/components/BreadCrumb";
import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import { IoApps, IoCreate } from "react-icons/io5";

interface CategoryFix extends Category {
	projects: Project[];
}

export interface indexProps {}

const fetcher = (url: string) =>
	axios.get(url).then((res: AxiosResponse) => res.data);

export default function Home(props: indexProps): ReactElement | null {
	const { data, error } = useSWR("/api/v1/category", fetcher);
	const { boxBackground } = useThemeColor();

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<BreadCrumb
				items={[
					{
						name: "Trang chủ",
						url: "/",
					},
					{
						name: "Dự án",
						url: "/categories",
					},
				]}
			/>

			<Head>
				<title>Danh sách dự án - Tuthienminhbach.com</title>
			</Head>

			<AdminPanel />

			{data.categories.map((category: CategoryFix) => {
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
		</>
	);
}

function AdminPanel(): ReactElement | null {
	// useSWR call
	const { data, error } = useSWR("/api/auth/session", fetcher);
	const { boxBackground } = useThemeColor();

	if (error) {
		return <div>Error</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	console.log("data", data);
	if (data.role !== "ADMIN") {
		return null;
	}

	return (
		<Box bgColor={boxBackground} p={2} my={2} rounded="md">
			<Heading size="md" my={2}>
				Admin Panel
			</Heading>

			<InitialFocus />
		</Box>
	);
}

function InitialFocus(): ReactElement | null {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef();

	return (
		<>
			<Button colorScheme="blue" size="sm" onClick={onOpen} leftIcon={<IoCreate />}>
				Tạo chuyên mục
			</Button>

			<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Thêm chuyên mục</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Tên chuyên mục</FormLabel>
							<Input ref={initialRef} placeholder="Tên chuyên mục" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Thêm
						</Button>
						<Button onClick={onClose}>Huỷ</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
