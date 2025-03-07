import { DefaultSession } from "next-auth";

// interface User extends DefaultSession["user"] {
// 	id?: string;
// }

// declare module "next-auth" {
// 	interface Session {
// 		user?: User; // Make user optional to match DefaultSession["user"]
// 		expires: DefaultSession["expires"];
// 	}
// }

// interface SessionV2 {
// 	user?: User; // Ensure compatibility
// 	expires: DefaultSession["expires"];
// }

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}
