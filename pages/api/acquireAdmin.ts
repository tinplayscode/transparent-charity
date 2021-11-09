import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../common/lib/prisma-client";
import { Role } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	// const { name, description, ownerId } = req.query;
	// const project = await prisma.project.create({
	// 	data: {
	// 		name: "Day la tieu de",
	// 		description: "Day la mo ta",
	// 		ownerId: "6188975447267fbe9948fd99",
	// 	},
	// });
	//
	const user = await prisma.user.update({
		where: {
			id: "6188975447267fbe9948fd99",
		},
		data: {
			role: Role.ADMIN,
		},
	});

	res.status(200).json({
		success: true,
		data: user,
	});
};
