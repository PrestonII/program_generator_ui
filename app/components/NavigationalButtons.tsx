import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function InternalNavigationalButton({
  content,
  execute,
  to,
  executableData,
}: InternalNavBtnProps) {
  const dispatch = useDispatch();

  return execute ? (
    <Button onClick={() => dispatch(execute(executableData))}>
      <Link to={to}>{content}</Link>
    </Button>
  ) : (
    <Button>
      <Link to={to}>{content}</Link>
    </Button>
  );
}

export function BackButton() {
  const history = useHistory();

  return <Button onClick={() => history.goBack()}>Back</Button>;
}

export type InternalNavBtnProps = {
  content: string;
  execute?: Function;
  executableData?: Record<string, unknown>;
  to: string;
};

export { InternalNavigationalButton };
