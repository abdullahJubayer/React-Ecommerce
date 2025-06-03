import React, { useEffect, useRef } from "react";

type GoogleSignInButtonProps = {
  onSuccess: (
    credentialResponse: google.accounts.id.CredentialResponse
  ) => void;
  onError?: (error: string) => void;
};

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({
  onSuccess,
  onError,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google || !buttonRef.current) return;

    window.google.accounts.id.initialize({
      client_id:
        "150273695146-1s69a23d0hd0e7lvu7j50sm1j5ci2raq.apps.googleusercontent.com",
      callback: (res) => {
        if (res.credential) {
          onSuccess(res);
        } else {
          onError?.("No credential received from Google");
        }
      },
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      theme: "outline",
      size: "large",
      type: "standard",
      shape: "rectangular",
    });

    // Optional: Automatically prompt One Tap
    // window.google.accounts.id.prompt();
  }, [onSuccess, onError]);

  return <div ref={buttonRef} />;
};

/*
Why can't we just use JSX?

React builds the DOM in memory, then paints it.
But if Google’s script runs before or during React rendering,
the elements may not yet exist in the DOM when Google scans for them.
*/
