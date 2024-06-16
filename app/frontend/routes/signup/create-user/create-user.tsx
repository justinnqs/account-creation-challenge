import React from 'react';
import { FlowLayout } from '../../../components/layouts/flow-layout/flow-layout.tsx';
import { Stack } from '../../../components/layouts/stack/stack.tsx';
import { Button } from '../../../components/primitives/button/button.tsx';
import { Card } from '../../../components/primitives/card/card.tsx';
import { Input } from '../../../components/primitives/input/input.tsx';
import { GET_PATH } from '../../../routes.tsx';

export function CreateUser() {
  return (
    <FlowLayout>
      <Card title="What's your first and last name?">
        <Stack className="gap-2">
          <Input type="text" label="First name" />
          <Input type="text" label="Last name" />
          <Input type="email" label="Email" />
          <Button href={GET_PATH.joint_access}>Continue</Button>
        </Stack>
      </Card>
    </FlowLayout>
  );
}
