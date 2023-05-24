import { createUser, deleteUser, getUser } from "controller";
import { Router } from "express";
import { validate } from "middleware";
import { userRequestIdSchema, userRequestSchema } from "types";
import { customRouteFunction } from "utils";


export const userRouter=Router()
userRouter.route("/").post(validate(userRequestSchema) ,customRouteFunction(createUser)).get(customRouteFunction(getUser))
userRouter.delete("/:id",validate(userRequestIdSchema), customRouteFunction(deleteUser))