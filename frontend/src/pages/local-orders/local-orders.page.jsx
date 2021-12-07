import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// REDUX

// COMPONENTS
import ProfileTab from '../../components/profile-tabs/profile/profile-tab.component';
import CreateLocalOrderTab from '../../components/local-orders-tab/create-local-order/create-local-order.component';

// STYLES
import {
  UserDetailsContainer,
  Title,
  Settings,
  SettingsBar,
  CollapseItem,
  SettingItem,
} from './local-orders.page.styles';
import { PageGrid } from '../../general.styles';

// ICONS
import { FaCaretDown } from 'react-icons/fa';

const LocalOrdersPage = () => {
  // ------------------------------- STATE AND CONSTANTS ----------------
  const [tab, setTab] = useState('profile');
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const barVariants = {
    hidden: {
      height: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    visible: {
      height: 'auto',
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  const barVariants2 = {
    hidden: {
      height: 'auto',
    },
    visible: {
      height: 'auto',
    },
  };

  // --------------------------------- USE EFFECT ------------------

  useEffect(() => {
    if (window.innerWidth > 500) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    function handleResize() {
      if (window.innerWidth > 500) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleImageChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   dispatch(updateMe(user.name, e.target.files[0]));
  // };

  // --------------------------------- HANDLERS ---------------------
  const renderSwitch = () => {
    switch (tab) {
      case 'profile':
        return <CreateLocalOrderTab variants={containerVariants} key={1} />;
      case 'current-order':
        return (
          <motion.h1
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key={2}
          >
            Pedidos actuales
          </motion.h1>
        );
      case 'orders-history':
        return (
          <motion.h1
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key={3}
          >
            Historial de pedidos
          </motion.h1>
        );
      default:
        return <ProfileTab variants={containerVariants} key={1} />;
    }
  };

  return (
    <PageGrid
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* -------------------------------- HEADER ---------------------- */}
      <UserDetailsContainer>
        <Title>Ordenes locales</Title>
      </UserDetailsContainer>
      {/* -------------------------------- SETTINGS BAR ---------------------- */}
      <Settings>
        <CollapseItem onClick={() => setOpen(!open)}>
          Configuración <FaCaretDown />
        </CollapseItem>
        <AnimatePresence>
          {open && (
            <SettingsBar
              variants={window.innerWidth <= 500 ? barVariants : barVariants2}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <SettingItem
                onClick={() => setTab('profile')}
                className={tab === 'profile' ? 'active' : ''}
              >
                Crear orden
              </SettingItem>
              <SettingItem
                onClick={() => setTab('current-order')}
                className={tab === 'current-order' ? 'active' : ''}
              >
                Ordenes activas
              </SettingItem>
              <SettingItem
                onClick={() => setTab('orders-history')}
                className={tab === 'orders-history' ? 'active' : ''}
              >
                Ordenes pasadas
              </SettingItem>
            </SettingsBar>
          )}
        </AnimatePresence>
      </Settings>
      {/* -------------------------------- TAB CONTENT ---------------------- */}

      <AnimatePresence exitBeforeEnter>{renderSwitch()}</AnimatePresence>
    </PageGrid>
  );
};

export default LocalOrdersPage;
