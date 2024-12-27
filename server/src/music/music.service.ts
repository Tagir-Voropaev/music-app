import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
    findAll(){
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
