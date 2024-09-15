import { createServer, Model } from "miragejs";

export function makeServer() {
  createServer({
    models: {
      vans: Model,
    },

    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description:
          "The Modest Explorer is a van designed to get you out of the house and into nature...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
      });
      server.create("van", {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description:
          "Beach Bum is a van inspired by surfers and travelers...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
      });
      server.create("van", {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description:
          "Reliable Red is a van that was made for traveling...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
      });
      server.create("van", {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description:
          "Dreamfinder is the perfect van to travel in and experience...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
      });
      server.create("van", {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description:
          "The Cruiser is a van for those who love to travel in comfort...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
      });
      server.create("van", {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description:
          "With this van, you can take your travel life to the next level...",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        type: "rugged",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/vans", (schema) => {
        return schema.vans.all();
      });

      this.get("/vans/:id", (schema, request) => {
        let id = request.params.id;
        return schema.vans.find(id);
      });
    },
  });
}