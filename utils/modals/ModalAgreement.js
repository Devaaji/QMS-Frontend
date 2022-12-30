import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import useAxios from '../../components/hooks/useAxios';
import useActionGlobal from '../../store/useActionGlobal';

const ModalAgreement = ({
  item,
  desicion1,
  desicion2,
  desicion3,
  isOpen,
  onClose,
}) => {
  const updateInfoStatus = useActionGlobal((state) => state.updateInfoStatus);

  const [, executeReport01] = useAxios(
    {
      url: '/create_reports_01',
      method: 'POST',
    },
    { manual: true }
  );

  const handleAcceptmentReport = async () => {
    try {
      await executeReport01({
        data: {
          no_operasi: item.no_operasi,
          nameFile: item.nameFile,
          date: item.date,
          time_prod: item.time_prod,
          cycle_time: item.cycle_time,
          total_product: item.total_product,
          p1_dimension: item.p1_dimension,
          p1_tolerance: item.p1_tolerance,
          p1_dimension_min: item.p1_dimension_min,
          p1_dimension_max: item.p1_dimension_max,
          p1_actual: item.p1_actual,
          p1_deviasi: item.p1_deviasi,
          p1_desicion: desicion1,
          p2_dimension: item.p2_dimension,
          p2_tolerance: item.p2_tolerance,
          p2_dimension_min: item.p2_dimension_min,
          p2_dimension_max: item.p2_dimension_max,
          p2_actual: item.p2_actual,
          p2_deviasi: item.p1_deviasi,
          p2_desicion: desicion2,
          p3_dimension: item.p3_dimension,
          p3_tolerance: item.p3_tolerance,
          p3_dimension_min: item.p3_dimension_min,
          p3_dimension_max: item.p3_dimension_max,
          p3_actual: item.p3_actual,
          p3_deviasi: item.p3_deviasi,
          p3_desicion: desicion3,
        },
      });
      await updateInfoStatus(item.nameFile);

      await onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure want to save?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Data will move to the report if click accept</ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" mr={3} onClick={handleAcceptmentReport}>
              Accept
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAgreement;
