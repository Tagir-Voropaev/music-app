import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
    getMusic(){
        return [{
            artist: 'Катя Самбука',
            name: 'Пати',
        }, {
            artist: 'Big Baby Tape',
            name: 'Chuchuka',
        }, {
            artist: 'Смешарики',
            name: 'Обормот',
        }];
    }
}
