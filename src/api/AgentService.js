import endpoint from "./endpoint";
import Handler from "./handler";

class AgentService {
    constructor() {
        this.endpoint = new endpoint();
        this.handler = new Handler();
    }

    async retrieveAgents() {
        return fetch(this.endpoint.AGENT)
            .then(response => {
                if (!response.ok) {
                    this.handler.handleError(response);
                }
                return response.json();
            }
            )
            .then(json => {
                console.log("Retrieved json: ");
                console.log(json);
            })
            .catch(error => {
                this.handler.handleError(error);
            });
    }
}