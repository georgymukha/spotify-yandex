window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCAivUzJwPl9b8TDuCmrLMA9Qyje7J2n0bqgAGexq0DZ0D4_d5DbUYKopz0ApU_XnEeWYBQkZo02ZwJWNxKgNFLUH8yp7abrnyQvjqsEF828bGgGCNlIzVA6HnLKq9L81T_oHaUvxdRrxXzsNlVSDHpvNCloIAvv9nW1MN8xcX_AZhk3ug72GNJHBaFpyK6mUaQIqwPu4_DLHmQx6623yM';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });

    // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  player.addListener('initialization_error', ({ message }) => { 
    console.error(message);
  });

  player.addListener('authentication_error', ({ message }) => {
    console.error(message);
  });

  player.addListener('account_error', ({ message }) => {
    console.error(message);
  });

  player.connect();


  document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };
};