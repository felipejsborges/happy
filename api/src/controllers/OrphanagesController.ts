import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Image from '../models/Image';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanageView';

export default class OrphanagesController {
	public async create(request: Request, response: Response): Promise<Response> {
		const orphanagesRepository = getRepository(Orphanage);

		const {
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends,
		} = request.body;

		const orphanage = new Orphanage();

		const requestImages = request.files as Express.Multer.File[];

		const images = requestImages.map(image => ({ path: image.filename }));
		
		orphanage.name = name;
		orphanage.latitude = latitude;
		orphanage.longitude = longitude;
		orphanage.about = about;
		orphanage.instructions = instructions;
		orphanage.opening_hours = opening_hours;
		orphanage.open_on_weekends = open_on_weekends === 'true';
		orphanage.images = images as Image[];

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			about: Yup.string().required().max(300),
			instructions: Yup.string().required(),
			opening_hours: Yup.string().required(),
			open_on_weekends: Yup.boolean().required(),
			images: Yup.array(Yup.object().shape({
				path: Yup.string().required(),
			})),
		});

		await schema.validate(orphanage, { abortEarly: false });

		await orphanagesRepository.save(orphanage);

		return response.status(201).json(orphanageView.render(orphanage));
	}

	public async index(request: Request, response: Response): Promise<Response> {
		const orphanagesRepository = getRepository(Orphanage);

		const orphanages = await orphanagesRepository.find();

		return response.status(200).json(orphanageView.renderMany(orphanages));
	}

	public async show(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const orphanagesRepository = getRepository(Orphanage);

		const orphanage = await orphanagesRepository.findOneOrFail(id);

		return response.status(200).json(orphanageView.render(orphanage));
	}
}