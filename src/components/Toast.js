import * as React from "react";
import { toaster, ToasterContainer } from "baseui/toast";
import { Button, SIZE } from "baseui/button";
import { Block } from "baseui/block";
import { Alert } from 'baseui/icon';

const Toast = () => {
  return (
    <ToasterContainer>
      <Button
        style={{width: '200px'}}
        onClick={() => {
          let toastKey;
          const msg =
            "Instructions here!";
          const ok = (
            <Block
              marginTop="15px"
              display="flex"
              justifyContent="center"
            >
              <Button
                size={SIZE.compact}
                onClick={() => toaster.clear(toastKey)}
              >
                Ok
              </Button>
            </Block>
          );
          const showMore = (
            <Block
              marginTop="15px"
              display="flex"
              justifyContent="left"
            >
              <Button
                size={SIZE.compact}
                onClick={() =>
                  toaster.update(toastKey, {
                    children: (
                      <>
                        {msg} to show different
                        notification type. {ok}
                      </>
                    )
                  })
                }
              >
                Show more
              </Button>
            </Block>
          );
          toastKey = toaster.info(
            <>
              {msg}
              {showMore}
            </>,
            {
              onClose: () => console.log("Toast closed."),
              overrides: {
                InnerContainer: {
                  style: { width: "100%" }
                }
              }
            }
          );
        }}
      >
        <Alert/>
      </Button>
    </ToasterContainer>
  );
}

export default Toast;