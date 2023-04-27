import { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import Person from '../models/personModel';

const fs = require('fs');

type person = {
  _id?: mongoose.Types.ObjectId;
  name: string;
  age: number;
  email: string;

  [key: string]: any;
}

export const getAllPeople = async (req: Request, res: Response) => {
  try {
    const people = await Person.find();
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
    const person: person | null = await Person.findById(req.params.id);
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
    const newPerson = Person.create(req.body)
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
    const person = await Person.findByIdAndUpdate(id, { name, age, email }, { new: true });
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
    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({
        status: 'error',
        message: 'Person not found',
      });
    }
    await Person.findByIdAndRemove(id);
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
