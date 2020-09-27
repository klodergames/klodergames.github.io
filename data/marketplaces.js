import React from 'react';
import { FaGooglePlay, FaAmazon, FaGithub } from 'react-icons/fa';

const marketplaces = {
  google: {
    Icon: FaGooglePlay,
    label: 'Google Play',
  },
  amazon: {
    Icon: FaAmazon,
    label: 'Amazon',
  },
  github: {
    Icon: FaGithub,
    label: 'Github Pages'
  },
};

export const getMarketplace = (url) =>
  marketplaces[Object.keys(marketplaces).find(x => url.includes(x))];

const getIconTag = (Icon, size) => <Icon size={size} />;

export const getIcon = (url, size) =>
  getIconTag(getMarketplace(url).Icon, size);

export const getLabel = (url) => getMarketplace(url).label;
