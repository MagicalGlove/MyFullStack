import { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';

const fs = require("fs");

interface Person {
  name: string;
  age: number;
  email: string;

  [key: string]: any;
}


export interface PersonDocument extends Document, Person {}

const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
});

export const PersonModel = mongoose.model<PersonDocument>('Person', personSchema);


const person: Person[] =
  [
    {
      'id': 1,
      'name': 'Audi',
      'age': 30,
      'email': 'monke@gmail.com',
    }
  ];

var data = fs.readFileSync("person.json");
var myObjects = JSON.parse(data);
var persons = myObjects.person;

export const getAllPeople = async (req: Request, res: Response) => {
    try {
        const people = await PersonModel.find();
        return res.status(200).json({
            status: 'success',
            data: people,
        });
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};

export const getPersonById = async (req: Request, res: Response) => {
    try {
        const person = await PersonModel.findById(req.params.id);
        if (person) {
            return res.status(200).json({
                status: 'success',
                data: person,
            });
        } else {
            return res.status(404).json({
                status: 'error',
                message: 'Person not found',
            });
        }
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};

export const createPerson = async (req: Request, res: Response) => {
    try {
        const { name, age, email } = req.body;
        const newPerson = new PersonModel({ name, age, email });
        await newPerson.save();
        return res.status(201).json({
            status: 'success',
            data: newPerson,
        });
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};

export const updatePerson = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;
        const person = await PersonModel.findByIdAndUpdate(id, { name, age, email }, { new: true });
        if (!person) {
            return res.status(404).json({
                status: 'error',
                message: 'Person not found',
            });
        }
        return res.status(200).json({
            status: 'success',
            data: person,
        });
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};

export const deletePerson = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const person = await PersonModel.findById(id);
        if (!person) {
            return res.status(404).json({
                status: 'error',
                message: 'Person not found',
            });
        }
        await PersonModel.findByIdAndRemove(id);
        return res.status(200).json({
            status: 'success',
            message: 'Person deleted',
        });
    } catch (err) {
        return res.status(400).json({
            status: 'error',
            message: 'Something went wrong',
        });
    }
};
