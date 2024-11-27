import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "@/scss/global.scss";
import { Button } from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <h2>Epora Trail</h2>
      <div>
      <Button primary>Ir al login</Button>
      </div>
    </div>
  );
}
