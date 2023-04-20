import { Request, Response } from 'express';
import Car from '../models/carModel';
import logger from '../utility/logger';

const fs = require("fs");

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;

  [key: string]: any;
}

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
        const rawData = fs.readFileSync('person.json');
        const people = JSON.parse(rawData);
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

function generateRandomId(): string {
    const timestamp = new Date().getTime().toString();
    const random = Math.floor(Math.random() * 100000).toString();
    return timestamp + random;
}

export const createPerson = async (req: Request, res: Response) => {
    try {
        const { name, age } = req.body;
        const rawData = fs.readFileSync('person.json');
        const people = JSON.parse(rawData);
        const newPerson = { id: generateRandomId(), name, age }; //I have my fun :D
        people.push(newPerson);
        fs.writeFileSync('person.json', JSON.stringify(people, null, 2));
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
        const { name, age } = req.body;
        const rawData = fs.readFileSync('person.json');
        const people = JSON.parse(rawData);
        const person = people.find((p: any) => p.id === id);
        if (!person) {
            return res.status(404).json({
                status: 'error',
                message: 'Person not found',
            });
        }
        person.name = name || person.name;
        person.age = age || person.age;
        fs.writeFileSync('person.json', JSON.stringify(people, null, 2));
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
        const rawData = fs.readFileSync('person.json');
        const people = JSON.parse(rawData);
        const newPeople = people.filter((p: {id: string}) => p.id !== id);
        if (people.length === newPeople.length) {
            return res.status(404).json({
                status: 'error',
                message: 'Person not found',
            });
        }
        fs.writeFileSync('person.json', JSON.stringify(newPeople, null, 2));
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

export const getPersonById = async (req: Request, res: Response) => {
    try {
        const rawData = fs.readFileSync('person.json');
        const people = JSON.parse(rawData);
        const person = people.find((p: { id: string; }) => p.id === req.params.id);
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



