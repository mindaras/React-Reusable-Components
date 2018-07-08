import React, { Component } from "react";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring";
import styled from "styled-components";
import { Card } from "components/elements";

const AnimCard = Card.withComponent(animated.div),
  DragCard = AnimCard.extend`
    height: 300px;
    position: absolute;
  `,
  CardContainer = styled(animated.div)`
    max-width: 320px;
    height: 330px;
    margin: 0 auto;
    background-color: #ccc;
    border-radius: 5px;
  `;

export default class Drag extends Component {
  onUp = xDelta => () => {
    if (xDelta < -300) {
      console.log("Remove Card");
    } else if (xDelta > 300) {
      console.log("Accept Card");
    }
  };

  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            intermediate={name => down && name === "x"}
          >
            {({ x }) => (
              <CardContainer
                style={{
                  backgroundColor: x.interpolate({
                    range: [-300, 300],
                    output: ["#FF1C68", "#14D790"],
                    extrapolate: "clamp"
                  })
                }}
              >
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  onTouchEnd={this.onUp(xDelta)}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1],
                      extrapolate: "clamp"
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: "clamp"
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Drag Me</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
