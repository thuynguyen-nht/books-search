import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>

            <div size="md-12">
                <Jumbotron>
                    <h1>404 Page Not Found</h1>
                    <h1>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">
                            🙄
                        </span>
                    </h1>
                </Jumbotron>
            </div>

        </Container>
    );
}

export default NoMatch;
