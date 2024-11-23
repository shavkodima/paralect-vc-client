import React, { Dispatch, SetStateAction } from 'react';
import { Badge, Box, Heading, Table } from '@chakra-ui/react';
import { Checkbox } from '../../../ui/checkbox';
import { JobType } from '../../../../types/listJobs.type';

type PropsTypeTableJobs = {
  listJobs: JobType[];
  selection: string;
  setSelection: Dispatch<SetStateAction<string>>;
};

const TableJobs = ({
  listJobs,
  selection = '',
  setSelection,
}: PropsTypeTableJobs) => {
  const handleChange = (changes: { checked: boolean }, id: string) => {
    if (!changes.checked) {
      setSelection('');
    } else {
      setSelection(id);
    }
  };

  return (
    <>
      <Table.Root
        size="sm"
        variant="outline"
      >
        <Table.Header
          bg={'#111'}
          color={'#fff !important'}
        >
          <Table.Row>
            <Table.ColumnHeader></Table.ColumnHeader>
            <Table.ColumnHeader>Компания</Table.ColumnHeader>
            <Table.ColumnHeader>Вакансия</Table.ColumnHeader>
            <Table.ColumnHeader>Зараплатная вилка</Table.ColumnHeader>
            <Table.ColumnHeader>Заметка</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Статус</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {listJobs.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>
                <Checkbox
                  top="1"
                  aria-label="Выбрать строку"
                  checked={selection === item._id}
                  onCheckedChange={(changes: any) =>
                    handleChange(changes, item._id)
                  }
                />
              </Table.Cell>
              <Table.Cell>{item.nameCompany}</Table.Cell>
              <Table.Cell>{item.nameVacancy}</Table.Cell>
              <Table.Cell>{item.salary}</Table.Cell>
              <Table.Cell maxW={'200px'}>{item.desc}</Table.Cell>
              <Table.Cell textAlign="center">
                {item.status ? (
                  <Badge
                    colorPalette="green"
                    justifyContent={'center'}
                    w={'100%'}
                  >
                    Активно
                  </Badge>
                ) : (
                  <Badge
                    colorPalette="red"
                    justifyContent={'center'}
                    w={'100%'}
                  >
                    Не активно
                  </Badge>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default TableJobs;
