import React, { Component } from "react";
import styled from "styled-components";
import { Transition, animated, config } from "react-spring";
import { Portal, black, absolute } from "components/utilities";
import Icon from "./Icon";
import { Card } from "./Card";

export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;

    return (
      <Portal>
        <Transition
          native
          config={config.gentle}
          from={{ opacity: 0, bgOpacity: 0, y: -200 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 200 }}
        >
          {on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    ...styles,
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}px, 0)`
                    )
                  }}
                >
                  <ModalClose onClick={toggle}>
                    <Icon name="close" />
                  </ModalClose>
                  {children}
                </ModalCard>
                <ModalBackground
                  style={{
                    opacity: styles.bgOpacity.interpolate(
                      bgOpacity => bgOpacity
                    )
                  }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))}
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = AnimCard.extend`
  position: relative;
  color: ${black};
  z-index: 10;
`;

const ModalClose = styled.button`
  ${absolute({
    x: "right"
  })};
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ModalBackground = styled(animated.div)`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background-color: #000;
`;
