import { Controller, Get } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) { }

    @Get()
    findAll() {
        return this.musicService.findAll();
    }
}
