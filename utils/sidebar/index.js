import { ImCheckboxChecked } from 'react-icons/im';
import { FaRegChartBar, FaRegCheckSquare } from 'react-icons/fa';

function generateSidebarItems() {
  return [
    {
      name: 'Dashboard',
      path: '/',
      icon: FaRegChartBar,
      sub: [
        {
          name: 'Dashboard M 6269 - 01',
          path: '/',
        },
        {
          name: 'Dashboard M 6269 - 02',
          path: '/dashboard_m6269_02',
        },
      ],
    },
    {
      name: 'M 6269 - 01',
      path: '/',
      icon: ImCheckboxChecked,
      sub: [
        {
          name: 'Monitoring Hasil Pengukuran',
          path: '/monitoring-01',
        },
        {
          name: 'Report Hasil Pengukuran',
          path: '/report-01',
        },
      ],
    },

    {
      name: 'M 6269 - 02',
      path: '/',
      icon: FaRegCheckSquare,
      sub: [
        {
          name: 'Monitoring Hasil Pengukuran',
          path: '/monitoring-02',
        },
        {
          name: 'Report Hasil Pengukuran',
          path: '/report-02',
        },
      ],
    },
  ];
}

export default generateSidebarItems;
