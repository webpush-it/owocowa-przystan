export const prerender = false; // To musi działać na serwerze (SSR)

import type { APIRoute } from "astro";
import { createClient } from "@sanity/client";

// Konfiguracja klienta z uprawnieniami do zapisu
const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "zcxx0aah",
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
    useCdn: false,
    token: import.meta.env.SANITY_API_WRITE_TOKEN,
    apiVersion: "2024-03-20",
});

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();

        // 1. Zabezpieczenie Anty-Spamowe (Honeypot)
        const honeypot = data.get("full_name_check");
        if (honeypot) {
            // Jeśli bot wypełnił ukryte pole, udajemy że jest OK, ale nic nie robimy
            return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
        }

        const name = data.get("name")?.toString();
        const email = data.get("email")?.toString();
        const message = data.get("message")?.toString();

        // 2. Walidacja
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ message: "Wypełnij wszystkie pola." }),
                { status: 400 }
            );
        }

        // 3. Wysłanie do Sanity
        await client.create({
            _type: "contact",
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
            status: 'new'
        });

        return new Response(
            JSON.stringify({ message: "Wiadomość wysłana pomyślnie!" }),
            { status: 200 }
        );

    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ message: "Błąd serwera. Spróbuj później." }),
            { status: 500 }
        );
    }
};
