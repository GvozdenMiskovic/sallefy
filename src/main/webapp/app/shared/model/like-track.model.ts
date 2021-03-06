import { Moment } from 'moment';

export interface ILikeTrack {
  id?: number;
  liked?: boolean;
  date?: Moment;
  userLogin?: string;
  userId?: number;
  trackName?: string;
  trackId?: number;
}

export class LikeTrack implements ILikeTrack {
  constructor(
    public id?: number,
    public liked?: boolean,
    public date?: Moment,
    public userLogin?: string,
    public userId?: number,
    public trackName?: string,
    public trackId?: number
  ) {
    this.liked = this.liked || false;
  }
}
