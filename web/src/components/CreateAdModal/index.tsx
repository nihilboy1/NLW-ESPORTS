import * as Checkbox from '@radix-ui/react-checkbox'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'

import { CaretDown, Check, GameController } from 'phosphor-react'
import { GameProps } from '../../App'
import { Input } from '../Form/Input'

interface CreateAdModalProps {
  games: GameProps[]
}

export function CreateAdModal({ games }: CreateAdModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="absolute bg-[#2A2634] py-8 px-10 text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg w-[480px] shadow-lg shadow-black/50">
          <Dialog.Title className="text-3xl font-black">
            Publique seu Anúncio!
          </Dialog.Title>
          <form className="mt-8 flex flex-col gap-2">
            <Select.Root>
              <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm flex justify-between items-center ">
                <Select.Value placeholder="Selecione o game que deseja jogar :)" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content >
                <Select.Viewport className="border-solid border-cyan-300 border-2  bg-zinc-900 py-3 px-4 my-auto mx-auto ">
                  <Select.Group className=''>
                    {games.map(game => (
                      <Select.Item value={game.title} key={game.id}>
                        <Select.ItemText className="text-zinc-50">
                          {game.title}
                        </Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input id="name" placeholder="Como te chamam dentro do game?" />
            </div>
            <div className="flex gap-2">
              <div className=" flex flex-col gap-2 w-[49%]">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
              </div>
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input id="discord" placeholder="usuário#0000" />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Domingo"
                  >
                    D
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Segunda"
                  >
                    S
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Terça"
                  >
                    T
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Quarta"
                  >
                    Q
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Quinta"
                  >
                    Q
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Sexta"
                  >
                    S
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded bg-zinc-900"
                    title="Sábado"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="time" id="hourStart" placeholder="De" />
                  <Input type="time" id="hourEnd" placeholder="Até" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-1 text-sm justify-start items-center">
              <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900 p-1">
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </div>
            <footer className="justify-end flex mt-4 gap-4">
              <Dialog.Close
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
              >
                Cancelar
              </Dialog.Close>
              <button
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                type="submit"
              >
                <GameController size={24} />
                Encontar duo!
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
