import React from 'react';
import { FlowLayout } from '../../../components/layouts/flow-layout/flow-layout.tsx';
import { Stack } from '../../../components/layouts/stack/stack';
import { Button } from '../../../components/primitives/button/button.tsx';
import { Card } from '../../../components/primitives/card/card.tsx';
import { Input } from '../../../components/primitives/input/input.tsx';
import { GET_PATH } from '../../../routes.tsx';

export function Deposit() {
  return (
    <FlowLayout>
      <Card title="Deposit funds" description="Accounts can be funded with as little as $5.">
        <Stack className="space-y-2">
          <Input label="Deposit Amount" />
          <Button size="sm" href={GET_PATH.account_selection}>
            Start over
          </Button>
        </Stack>
      </Card>
    </FlowLayout>
  );
}
