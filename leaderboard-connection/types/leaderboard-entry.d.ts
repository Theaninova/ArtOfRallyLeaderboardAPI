import {PlatformType} from "./platform-type";

export interface LeaderboardEntry {
    platformUserID: string
    platformUserName: string
    rank: number
    score: number
    scoreDetails: number[]
    replayDataID: number
    replayID: string
    type: PlatformType,
}
