import express from "express"
import { Router } from 'express';
import { home } from "../controllers/index"
export const router = Router()

router.get("/", home)