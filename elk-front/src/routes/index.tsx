import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={
        <div>
          <p>
            oi
          </p>
        </div>
      } />
    </ReactRoutes>
  );
}

export default Routes;