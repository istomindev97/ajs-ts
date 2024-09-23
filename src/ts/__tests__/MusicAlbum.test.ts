import MusicAlbum from "../domain/MusicAlbum";

test('should create a new instance of MusicAlbum', () => {
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    
    expect(musicAlbum).toBeInstanceOf(MusicAlbum);
  });