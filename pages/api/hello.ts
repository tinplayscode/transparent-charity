import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "common/lib/prisma-client";

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
	const user = await prisma.category.update({
		where: {
			id: "618a212f5a484db7736dac42",
		},
		data: {
			projects: {
				connect: [{
					id: "61896acfc9c156246525f18c",
				}],
			},
		},
	});

	res.status(200).json({
		success: true,
		data: user,
	});
};
