import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/user.model.js";

export const inngest = new Inngest({ id: "ecommerce-app-fullstack" });

// 1. Sync User Function
const synceUser = inngest.createFunction(
    // Argument 1: Combined Configuration Object (with nested triggers)
    {
        id: "sync-user",
        name: "Sync User from Clerk",
        triggers: [{ event: "clerk/user.created" }] // 
    },
    // Argument 2: The Async Handler Function
    async ({ event }) => {
        await connectDB();
        const { id, email_addresses, first_name, last_name, image_url } = event.data;

        const newUser = {
            clerkId: id,
            email: email_addresses?.[0]?.email_address || "",
            name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
            imageUrl: image_url,
            address: [],
            wishlist: [],
        };

        await User.create(newUser);
    }
);

// 2. Delete User Function
const deleteUserFromDB = inngest.createFunction(
    // Argument 1: Combined Configuration Object (with nested triggers)
    {
        id: "delete-user-from-db",
        name: "Delete User from DB",
        triggers: [{ event: "clerk/user.deleted" }]
    },
    // Argument 2: The Async Handler Function
    async ({ event }) => {
        await connectDB();
        const { id } = event.data;
        await User.deleteOne({ clerkId: id });
    }
);

export const functions = [synceUser, deleteUserFromDB];