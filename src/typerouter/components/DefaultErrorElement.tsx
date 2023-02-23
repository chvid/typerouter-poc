import React from "react";

export const DefaultErrorElement: React.FC<{ error: any }> = ({ error }) => <p>Unhandled error: {"" + error}</p>;
