import React from 'react';
import { FlowLayout } from '../../../components/layouts/flow-layout/flow-layout.tsx';
import { Stack } from '../../../components/layouts/stack/stack';
import { Button } from '../../../components/primitives/button/button.tsx';
import { Card } from '../../../components/primitives/card/card.tsx';
import { Input } from '../../../components/primitives/input/input.tsx';
import { GET_PATH } from '../../../routes.tsx';

export function JointAccess() {
  return (
    <FlowLayout>
      <Card
        title="Will this be a joint account?"
        description="Joint accounts allow for a secondary account holder which provides the same level of access as the primary."
      >
        <Stack className="gap-2">
          <Input label="First name" />
          <Input label="Last name" />
          <Input label="Email" />
          <Button href={GET_PATH.stock_restrictions}>Continue</Button>
        </Stack>
      </Card>
    </FlowLayout>
  );
}
