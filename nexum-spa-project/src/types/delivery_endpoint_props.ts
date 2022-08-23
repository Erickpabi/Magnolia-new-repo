type BaseProps = {
    readonly id: string,
    readonly title: string,
    readonly content: string,
    readonly highlight: string
}

export type PressProps = {
    readonly image: string,
    readonly organization: string,
    readonly dateTime: string,
    readonly tags: string[]

} & BaseProps

export type PressReleaseProps = {
    readonly imageLink: []
    readonly date: string
    readonly organization: string
} & BaseProps

export type NewsProps = {

    imageLink: any[]
    author: string
    date: string
    tag: string[]
    categories: any[]
} & BaseProps